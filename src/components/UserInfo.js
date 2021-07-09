export default class UserInfo {
    constructor(name, job, avatar) {
        this._name = name;
        this._job = job;
        this._avatar = avatar;
    }


    getUserInfo() {
        const name = this._name.textContent;
        const job = this._job.textContent;
        const id = this._id;
        const avatar = this._avatar;
        return {name, job, id, avatar};
    }

    setUserInfo(name, about, id) {
        if (name) {
            this._name.textContent = name;
        }
        if (about) {
            this._job.textContent = about;
        }
        if (id) {
            this._id = id;
        }

    }
    setAvatar(link) {
        if (link) {
            this._avatar.src = link;
        }
    }

    getId() {
        return this._id;
    }
}