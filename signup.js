const recentError = {
    name: false,
    email: false,
    password: false,
    selectBox: false
};
let errors = recentError;

const validateInput = input => {
    const elem = document.getElementById(input);
    const spanElem = document.getElementById(`${input}_span`);
    const value = document.getElementById(input).value;
    if(input === 'name'){
        if (value === '') {
            spanElem.innerHTML = 'Please enter name';
            elem.classList.add("err");
            elem.classList.remove("input-color");
            errors[input] = 'Please enter name';
        } else {
            errors[input] = null;
        }
    }
    else if(input === 'email'){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(value).toLowerCase())) {
            spanElem.innerHTML = 'Please enter a valid email address';
            elem.classList.add("err");
            elem.classList.remove("input-color");
            errors[input] = 'Please enter a valid email address';
        } else {
            errors[input] = null;
        }

    }
    else if(input === 'password') {
        if(value.length < 8) {
            spanElem.innerHTML = 'Please enter valid password';
            elem.classList.add("err");
            elem.classList.remove("input-color");
            errors[input] = 'Please enter valid password';
        } else {
            errors[input] = null;
        }

    }
    else if(input === 'selectBox'){
        if(!value) {
            spanElem.innerHTML = 'Please select user type';
            elem.classList.add("err");
            elem.classList.remove("input-color-select");
            errors[input] = 'Please select user type';
        } else {
            errors[input] = null;
        }
    }
    else {
        errors = recentError
    }

    const ele = document.getElementById('button');

    if (Object.values(errors).every(error => error === null)) {
      ele.disabled = false
      ele.classList.add('enable');
    } else {
        ele.disabled = true
        ele.classList.remove('enable');
    }
}

const errorRemove = id => {
    const spanElem = document.getElementById(`${id}_span`);
    const elem = document.getElementById(id);
    spanElem.innerHTML = '';
    elem.parentElement.classList.remove("err");
    if(id === 'selectBox')
        elem.classList.add("input-color-select");
    else
        elem.classList.add("input-color");

}
