const submit = document.querySelector("#submit");
submit.addEventListener('click', function(){
    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;

    const day_error = document.querySelector(".day_error");
    const month_error = document.querySelector(".month_error");
    const year_error = document.querySelector(".year_error");

    const day_text_error = document.querySelector(".day_text_error");
    const month_text_error = document.querySelector(".month_text_error");
    const year_text_error = document.querySelector(".year_text_error");

    const day_input = document.querySelector("#day");
    const month_input = document.querySelector("#month");
    const year_input = document.querySelector("#year");

    const submit_img = document.querySelector("img");

    day_error.innerHTML = "";
    month_error.innerHTML = "";
    year_error.innerHTML = "";
    day_error.classList.remove("error");
    day_text_error.classList.remove("error");
    day_input.classList.remove("input_error");
    month_error.classList.remove("error");
    month_text_error.classList.remove("error");
    month_input.classList.remove("input_error");
    year_error.classList.remove("error");
    year_text_error.classList.remove("error");
    year_input.classList.remove("input_error");

    FlagOk = 1;

    if(day=="") {
        day_error.innerHTML = "This field is required";
        day_error.classList.add("error");
        day_text_error.classList.add("error");
        day_input.classList.add("input_error");
        submit_img.classList.add("submit_top");
        FlagOk = 0;
    }
    if(month=="") {
        month_error.innerHTML = "This field is required";
        month_error.classList.add("error");
        month_text_error.classList.add("error");
        month_input.classList.add("input_error");
        FlagOk = 0;
    }
    if(year=="") {
        year_error.innerHTML = "This field is requred";
        year_error.classList.add("error");
        year_text_error.classList.add("error");
        year_input.classList.add("input_error");
        FlagOk = 0;
    }

    if(month%2==0 && day>30 && month<=7 || month%2==1 && day>30 && month>7 || day>31 ||(month==2 && year%4==0 && day>29 || month==2 && year%4==1 && day>28)){
        day_error.innerHTML = "Must be a valid day"
        day_error.classList.add("error");
        day_text_error.classList.add("error");
        day_input.classList.add("input_error");
        submit_img.classList.add("submit_top");
        FlagOk = 0;
    }

    if(month > 12 || month < 0){
        month_error.innerHTML = "Must be a valid Month";
        month_error.classList.add("error");
        month_text_error.classList.add("error");
        month_input.classList.add("input_error");
        FlagOk = 0;
    }

    if(FlagOk == 1) {
        const inputDate = new Date(year, month-1, day);
        const calcMill = Date.now() - inputDate;
        const calc = new Date(calcMill);
        const calcYear = calc.getFullYear() - 1970;
        if(calcYear < 0) {
            year_error.innerHTML = "Must be in the past";
            year_error.classList.add("error");
            year_text_error.classList.add("error");
            year_input.classList.add("input_error");
            day_error.classList.add("error");
            day_text_error.classList.add("error");
            day_input.classList.add("input_error");
            submit_img.classList.add("submit_top");
            month_error.classList.add("error");
            month_text_error.classList.add("error");
            month_input.classList.add("input_error");
            return;
        }
        const calcMonth = calc.getMonth();
        const calcDay = calc.getDate() - 1;

        document.querySelector("#calcDay").innerHTML = calcDay + "<span> Days </span>"
        document.querySelector("#calcMonth").innerHTML = calcMonth + "<span> Months </span>";
        document.querySelector("#calcYear").innerHTML = calcYear + " <span> Years </span>";
    }

})