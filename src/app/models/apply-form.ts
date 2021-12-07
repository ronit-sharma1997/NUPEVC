export class ApplyForm {
    name: string;
    email: string;
    major: string;
    linkedIn: string;
    goodFit: string;
    teams: string[];
    positions: string[];
    resume: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.major = '';
        this.linkedIn = '';
        this.goodFit = '';
        this.resume = '';
        this.teams = [];
        this.positions = [];
    }
}