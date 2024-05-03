//initialize important div variables
document.addEventListener("DOMContentLoaded", function() {
        const killPersonBtn = document.getElementById("kill-person-btn");
        const killPersonContainer = document.getElementById("kill_Person_container");
        const killpersonForm = document.getElementById("kill-person-form");
        const checkModifyBtn = document.getElementById("check-modify-btn");
        const checkAndModifyContainer = document.getElementById("check_and_modify");
        const checkAndModifyForm = document.getElementById("person-form");
        const submitCheckButton = document.getElementById("person-form").querySelector("button[type='submit']");
        const submitKillButton = document.getElementById("kill-person-form").querySelector("button[type='submit']");
        const modificationTypeDropdown = document.getElementById("modification_type");
        const Extra_Info_Div = document.getElementById("Extra_Info");    
        const additionalInfoInput = document.getElementById("additional_info");
        const purpleslidebar_Left = document.getElementById("RimShadow-left");
        const purpleslidebar_Right = document.getElementById("RimShadow-right");
        const purpleslidebar_top = document.getElementById("RimShadow-top");
        const purpleslidebar_bottom = document.getElementById("RimShadow-bottom");
        const shadowoverlap_right = document.getElementById("overlapshadow-right");
        const shadowoverlap_left = document.getElementById("overlapshadow-left");
        const shadowoverlap_top = document.getElementById("overlapshadow-top");
        const shadowoverlap_bottom = document.getElementById("overlapshadow-bottom");

    // the button calls for all the functions
    checkModifyBtn.addEventListener("click", function() {
        Check_Or_Modify_person();});
    killPersonBtn.addEventListener("click", function() {
        Kill_Person();});


function Kill_Person(){
    //when kill_person_btn clicked, slide the form out and add listeners
    Show_Kill_Person_Form();
    document.addEventListener("click", documentClickHandlerForKillPerson);    
    killpersonForm.addEventListener("submit", killformSubmitHandler);
    function Show_Kill_Person_Form(){
        purpleslidebar_top.style.top = "-20%";
        purpleslidebar_bottom.style.bottom = "-20%";
        purpleslidebar_Left.style.left = "-20%";
        purpleslidebar_Right.style.right = "-20%";
        shadowoverlap_top.style.top = "-20%";
        shadowoverlap_bottom.style.bottom = "-20%";
        shadowoverlap_left.style.left = "-20%";
        shadowoverlap_right.style.right = "-20%";
        setTimeout(function() {
        killPersonContainer.classList.remove("hidden");        
        }, 200);
        setTimeout(function() {
        killPersonContainer.style.width = "60%";        
        killPersonContainer.style.height = "60%";      
        killPersonContainer.style.top = "20%";      
        killPersonContainer.style.right = "20%";      
        }, 210);
    }

    // hide form and remove listeners
    function Hide_Kill_Person_Form(){
        document.removeEventListener("click", documentClickHandlerForKillPerson); 
        killpersonForm.removeEventListener("submit", killformSubmitHandler);
        purpleslidebar_Left.style.left = "";
        purpleslidebar_Right.style.right = "";
        purpleslidebar_top.style.top = "";
        purpleslidebar_bottom.style.bottom = "";        
        shadowoverlap_top.style.top = "";
        shadowoverlap_bottom.style.bottom = "";
        shadowoverlap_left.style.left = "";
        shadowoverlap_right.style.right = "";     
        killPersonContainer.style.width = "0%";        
        killPersonContainer.style.height = "0%";
        killPersonContainer.style.top = "50%";      
        killPersonContainer.style.right = "50%";
        setTimeout(function() {        
        killPersonContainer.classList.add("hidden");
        }, 50);        
    }

    function documentClickHandlerForKillPerson(event) {
        if (!killPersonContainer.contains(event.target)
            && event.target !== killPersonBtn
            && event.target !== submitKillButton) {
            Hide_Kill_Person_Form();
        }
    }
    
    function killformSubmitHandler(event) {
        event.preventDefault();
    
        const kill_formData = new FormData(killpersonForm);
    
        const kill_xhr = new XMLHttpRequest();
        kill_xhr.open("POST", killpersonForm.action, true);
        kill_xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        kill_xhr.onload = function() {
            if (kill_xhr.status === 200) {
                console.log("Form submitted successfully");
            } else {
                console.error("Form submission failed:", kill_xhr.status);
            }
        };
        kill_xhr.onerror = function() {
            console.error("Form submission error");
        };
        kill_xhr.send(kill_formData);
        Hide_Kill_Person_Form();
    }
}


function Check_Or_Modify_person(){    
        //when check_modify_btn clicked, slide the form out and add all event listeners       
        showCheckModify();
        document.addEventListener("click", documentClickHandler);
        modificationTypeDropdown.addEventListener("change", modificationTypeChangeHandler);
        checkAndModifyForm.addEventListener("submit", CheckformSubmitHandler);

        function showCheckModify() {
            checkAndModifyContainer.style.right = "0";
            checkAndModifyContainer.style.opacity = "1";
            setTimeout(function() {
            purpleslidebar_Left.style.left = "-50.3%";            
            shadowoverlap_left.style.left = "-50.3%";
        },180);
        }
        //when submit_btn or anywhere on main page is clicked, slide the form back and reset it and remove listeners        
        function hideCheckModify() {
            document.removeEventListener("click", hideCheckModify);
            modificationTypeDropdown.removeEventListener("change", modificationTypeChangeHandler);
            checkAndModifyForm.removeEventListener("submit", CheckformSubmitHandler);
            document.removeEventListener("click", documentClickHandler);
            checkAndModifyContainer.style.right = "-100%";
            setTimeout(function() {
            checkAndModifyContainer.style.opacity = "0";
            document.getElementById("person-form").reset();
            Extra_Info_Div.style.display = "none";
            additionalInfoInput.required = false;
            }, 300);
            purpleslidebar_Left.style.left = "";
            shadowoverlap_left.style.left = "";            
            
        }
        function documentClickHandler(event) {
            if (!checkAndModifyContainer.contains(event.target)
                && event.target !== checkModifyBtn
                && event.target !== submitCheckButton) {
                hideCheckModify();
            }
        }        

        // if additional info is needed, show div and force input
        function modificationTypeChangeHandler() {
            let labelText = "Injured by?";
            if (this.value === "injured") {
                labelText = "Injured by?";
                Extra_Info_Div.style.display = "block";
                additionalInfoInput.required = true;
            } else if (this.value === "Custom") {
                labelText = "Then what???:";
                Extra_Info_Div.style.display = "block";
                additionalInfoInput.required = true;
            } else {
                Extra_Info_Div.style.display = "none";
                additionalInfoInput.required = false;
            }
            document.querySelector("label[for='additional_info']").innerHTML = labelText;
        }

        if (modificationTypeDropdown.value !== "injured" && modificationTypeDropdown.value !== "Custom") {
            Extra_Info_Div.style.display = "none";
            additionalInfoInput.required = false;
            }

        //send requests through server for processing and commit changes to database, then hide form
        function CheckformSubmitHandler(event) {
            event.preventDefault();
        
            const Check_formData = new FormData(checkAndModifyForm);
        
            const Check_xhr = new XMLHttpRequest();
            Check_xhr.open("POST", checkAndModifyForm.action, true);
            Check_xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            Check_xhr.onload = function() {
                if (Check_xhr.status === 200) {
                    console.log("Form submitted successfully");
                } else {
                    console.error("Form submission failed:", Check_xhr.status);
                }
            };
            Check_xhr.onerror = function() {
                console.error("Form submission error");
            };
            Check_xhr.send(Check_formData);
            hideCheckModify();
        }
        
    }
    
});