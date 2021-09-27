window.onload=function()
{
    var page__grid__items = document.getElementsByClassName('page__grid__item');
    var overlay = document.getElementById('overlay');
    if(page__grid__items && overlay)
    {
        var page__grid__item__count = page__grid__items.length;
        for(var i = 0; i < page__grid__item__count; i++)
        {
            page__grid__items[i].addEventListener("click", function(e, i)
            {
                $img = e.target.childNodes[0].getAttribute("src");
                overlay.style.visibility = 'visible';
                overlay.style.opacity = 1;
                overlay.childNodes[1].setAttribute("src", $img);
            });
        }

        overlay.addEventListener("click", function()
        {
            overlay.style.opacity = 0;
            setTimeout(function(){overlay.style.visibility = 'hidden';}, 250);
        });
    }

    var message = document.getElementById('message');
    if(message)
    {
        message.addEventListener("input", function()
        {
            message.style.height = 'auto';
            message.style.height = message.scrollHeight+'px';
        });
    }

    var send = document.getElementById('send');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var telephone = document.getElementById('number');
    var message = document.getElementById('message');

    if(name)
    {
        name.addEventListener("input", function()
        {
            var error = document.getElementById("error--name");
            if(error)
            {
                error.remove();
            }
        })
    }

    if(email && telephone)
    {
        email.addEventListener("input", function()
        {
            var error = document.getElementById("error--comms");
            if(error)
            {
                error.remove();
            }
        })

        telephone.addEventListener("input", function()
        {
            var error = document.getElementById("error--comms");
            if(error)
            {
                error.remove();
            }
        })
    }

    if(message)
    {
        message.addEventListener("input", function()
        {
            var error = document.getElementById("error--message");
            if(error)
            {
                error.remove();
            }
        })
    }

    if(send)
    {
        send.addEventListener("click", function()
        {
            document.querySelectorAll('.form__error').forEach(e => e.remove());

            var error = false;

            if(message.value == "")
            {
                let messageError = document.createElement('span');
                messageError.className = "form__error";
                messageError.innerText = "Please give a message";
                messageError.id = "error--message";
                message.parentNode.append(messageError);
                message.focus();
                error = true;
            }

            if(email.value == "" && telephone.value == "")
            {
                let commsError = document.createElement('span');
                commsError.className = "form__error";
                commsError.innerText = "Please give a valid email or telephone number";
                commsError.id = "error--comms";
                telephone.parentNode.append(commsError);
                email.focus();
                error = true;
            }

            if(name.value == "")
            {
                let nameError = document.createElement('span');
                nameError.className = "form__error";
                nameError.innerText = "Please give a name";
                nameError.id = "error--name";
                name.parentNode.append(nameError);
                name.focus();
                error = true;
            }

            if(error)
            {
                return;
            }

            // POST MESSAGE HERE - TODO
            name.value = "";
            email.value = "";
            telephone.value = "";
            message.value = "";

            let confirmation = document.createElement('div');
            confirmation.className = "form__confirmation";
            confirmation.innerText = "Your message has been sent!";
            send.parentNode.append(confirmation);
            setTimeout(function(){confirmation.style.opacity = 1;}, 25);
            setTimeout(function(){confirmation.style.opacity = 0;}, 2250);
            setTimeout(function(){confirmation.style.visibility = 'hidden';}, 2500);
        });
    }

    const sections = document.querySelectorAll(".page");
    const navLi = document.querySelectorAll(".nav .page__container ul a");
    window.onscroll = () =>
    {
        var current = "";
        sections.forEach((section) =>
        {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60)
            {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) =>
        {
            li.classList.remove("active");
            if (li.classList.contains(current))
            {
                li.classList.add("active");
            }
        });
    };
}