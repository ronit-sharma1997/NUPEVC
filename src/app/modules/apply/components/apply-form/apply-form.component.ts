import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faFile, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { ApplyForm } from 'src/app/models/apply-form';
import { AWSService } from 'src/app/services/aws.service';
import { ModalComponent } from 'src/app/modules/common/modal/modal.component';


@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {
  applyForm: ApplyForm = new ApplyForm()
  @ViewChild('fileInput') inputElement: ElementRef<HTMLElement>;
  @ViewChild('one') firstStage: ElementRef<HTMLElement>;
  @ViewChild('two') secondStage: ElementRef<HTMLElement>;
  @ViewChild('three') thirdStage: ElementRef<HTMLElement>;
  currentStage: string = 'one'
  buttonLabel: string = 'Next'
  faFileUpload = faFileUpload
  faFile = faFile
  fileTypes:Map<string, string> = new Map()
  fileToolTips:string[] = []
  dropZoneClass: string = ''
  uploadedFileCount: string = '0%'
  uploadedFileType: string = ''
  uploadArea: string = ''
  fileDetails: string = ''
  uploadedFile: string = ''
  uploadedFileInfo: string = ''
  uploadedFileName: string = ''
  loadingText: boolean = false
  previewImage: boolean = false
  successfulSubmit: boolean 
  submitMessage: string
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(private awsService: AWSService) { 
    this.fileTypes.set('application/pdf', '.pdf')
    this.fileTypes.set('application/vnd.openxmlformats-officedocument.wordprocessingml.document', '.docx')
    this.fileTypes.set('application/msword', '.doc')

    this.fileToolTips.push(...this.fileTypes.values())
  }

  ngOnInit(): void {
  }

  dragOverEvent(event: any) {
    event.preventDefault();

    // Add Class (drop-zoon--over) On (drop-zoon)
    this.dropZoneClass = 'drop-zoon--over';
  }

  dragLeaveEvent(event: Event) {
    event.preventDefault();

    this.dropZoneClass = '';
  }

  dropEvent(event:any) {
    event.preventDefault();

    this.dropZoneClass = '';

    // Select The Dropped File
    const file = event.dataTransfer.files[0];

    // Call Function uploadFile(), And Send To Her The Dropped File :)
    this.uploadFile(file);
  }

  clickEvent() {
    this.inputElement.nativeElement.click()
  }

  radioButtonChanged(event: any):void {
    this.currentStage = event.target.id

    if(this.currentStage == 'three') {
      this.buttonLabel = 'Submit'
    } else {
      this.buttonLabel = 'Next'
    }
  }

  teamsCheckboxChanged(event: any): void {
    if(event.target.checked) {
      this.applyForm.teams.push(event.target['id'])
    } else {
      this.applyForm.teams = this.applyForm.teams.filter((team) => team !== event.target['id'])
    }
  }

  positionsCheckboxChanged(event: any): void {
    if(event.target.checked) {
      this.applyForm.positions.push(event.target['id'])
    } else {
      this.applyForm.positions = this.applyForm.positions.filter((position) => position !== event.target['id'])
    }
  }

  buttonClicked(event: any): void {
    event.preventDefault();
    if(this.currentStage == 'one') {
      this.secondStage.nativeElement.click()
    } else if (this.currentStage == 'two') {
      this.thirdStage.nativeElement.click()
    } else {
      console.log(this.applyForm)
      this.awsService.apply(this.applyForm).subscribe({next: (response: any) => {
        this.successfulSubmit = true;
        this.submitMessage = 'Successfully Sent Your Application!'
        this.applyForm = new ApplyForm()
        this.modal.openResult()
        this.firstStage.nativeElement.click()
    }, error: (error: Error) => {this.modal.close(); this.successfulSubmit = false; this.submitMessage = error.message; this.modal.openResult()}})
      
      
    }
  }

  validateFirstStage(): boolean {
    return this.applyForm.name == '' || this.applyForm.email == '' || this.applyForm.major == '' || this.applyForm.linkedIn == ''
  }

  validateSecondStage(): boolean {
    return this.applyForm.teams.length == 0 || this.applyForm.positions.length == 0 || this.applyForm.goodFit == ''
  }

  validateThirdStage(): boolean {
    return this.applyForm.resumeData == ''
  }

  fileInputChanged(event: any) {
    // Select The Chosen File
    const file = event.target.files[0];

    // Call Function uploadFile(), And Send To Her The Chosen File :)
    this.uploadFile(file);
  }

  uploadFile(file: File) {
    // FileReader()
    const fileReader = new FileReader();
    // File Type 
    const fileType = file.type;
    // File Size 
    const fileSize = file.size;
  
    // If File Is Passed from the (File Validation) Function
    if (this.fileValidate(fileType, fileSize)) {
      // Add Class (drop-zoon--Uploaded) on (drop-zoon)
      this.dropZoneClass = 'drop-zoon--Uploaded';
  
      // Show Loading-text
      this.loadingText = true
      // Hide Preview Image
      this.previewImage = false
  
      // Remove Class (uploaded-file--open) From (uploadedFile)
      this.uploadedFile = ''
      // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
      this.uploadedFileInfo = ''
  
      // After File Reader Loaded 
      fileReader.addEventListener('load', () => {
        // After Half Second 
        setTimeout(() => {
          // Add Class (upload-area--open) On (uploadArea)
          this.uploadArea = 'upload-area--open'
  
          // Hide Loading-text (please-wait) Element
          this.loadingText = false
          // Show Preview Image
          this.previewImage = true
  
          // Add Class (file-details--open) On (fileDetails)
          this.fileDetails = 'file-details--open';
          // Add Class (uploaded-file--open) On (uploadedFile)
          this.uploadedFile = 'uploaded-file--open';
          // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
          this.uploadedFileInfo = 'uploaded-file__info--active';
        }, 500); // 0.5s
  
        // // Add The (fileReader) Result Inside (previewImage) Source
        // previewImage.setAttribute('src', fileReader.result);
  
        // // Add File Name Inside Uploaded File Name
        this.uploadedFileName = file.name;
  
        // Call Function progressMove();
        this.progressMove();

        this.applyForm.resumeData = fileReader.result as string || ''
      });
  
      // Read (file) As Data Url 
      fileReader.readAsDataURL(file);
    } else { // Else
  
      this.fileValidate(fileType, fileSize); // (this) Represent The fileValidate(fileType, fileSize) Function
  
    };
  };
  
  // Progress Counter Increase Function
  progressMove() {
      // Counter Start
      let counter = 0;
    
      // After 600ms 
      setTimeout(() => {
        // Every 100ms
        let counterIncrease = setInterval(() => {
          // If (counter) is equle 100 
          if (counter === 100) {
            // Stop (Counter Increase)
            clearInterval(counterIncrease);
          } else { // Else
            // plus 10 on counter
            counter = counter + 10;
            // add (counter) vlaue inisde (uploadedFileCounter)
            this.uploadedFileCount = `${counter}%`
          }
        }, 100);
        this.dropZoneClass = '';
      }, 600);
  };
  
  
  // Simple File Validate Function
  fileValidate(fileType: string, fileSize: number) {
    // File Type Validation
    this.uploadedFileType = this.fileTypes.get(fileType)?.substring(1) || ''
  
    // If The Uploaded File Is An Image
    if (this.uploadedFileType !== '') {
      // Check, If File Size Is 2MB or Less
      if (fileSize <= 2000000) { // 2MB :)
        return true;
      } else { // Else File Size
        return alert('Please Your File Should be 2 Megabytes or Less');
      };
    }
  };

}