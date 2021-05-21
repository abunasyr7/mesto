const UserInfoConfig ={
    nameInfo = '.profile__info-name',
    jobInfo = '.profile__info-text'
}

export default class UserInfo {
    constructor(name, job) {
        this._name = name;
        this._job = job;
    }

    getUserInfo() {
        this._name = document.querySelector(UserInfoConfig.nameInfo);
        this._job = document.querySelector(UserInfoConfig.jobInfo);
        validatorEditProfile.removeInputErrorProfile();
    }

    setUserInfo(e) {
        e.preventDefault();
        document.querySelector(UserInfoConfig.nameInfo) = this._name;
        document.querySelector(UserInfoConfig.jobInfo) = this._job;
    }
}