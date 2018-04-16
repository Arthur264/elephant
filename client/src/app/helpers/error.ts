export class ErrorHandler {

    constructor() {}

    public list_error(error) {
        if (!Array.isArray(error)) {
            error = [error]
        }
        let list = document.createElement('ul');
        error.map((item) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            list.appendChild(li)
        })
        return list
    }
}
