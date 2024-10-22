function validateExamDate (elem){

    let today = new Date();
    today.setHours(0,0,0,0); //nur Datum nicht die Zeit berücksichtigen

    let examDate = new Date(elem.value);
    examDate.setHours(0,0,0,0);

    if (examDate <= today) {
        elem.classList.add("is-valid")
        elem.classList.remove("is-invalid")
    } else {
        elem.classList.add("is-invalid")
        elem.classList.remove("is-valid")
    }

}