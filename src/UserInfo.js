export default class UserInfo {
    constructor(name, job) {
        this._name = name;
        this._job = job;
    }

    getUserInfo() {
        const name = this._name.textContent;
        const job = this._job.textContent;
        validatorEditProfile.removeInputErrorProfile();
        return {name, job};
    }

    setUserInfo(info) {
        this._name.textContent = info.name;
        this._job.textContent = info.job;
    }
}