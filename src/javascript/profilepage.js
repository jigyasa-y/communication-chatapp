 const edit=document.querySelector("#edit");
    const bio=document.querySelector("#moe");
     const p_name=document.querySelector("#profilename");
      const edit_button=document.querySelector("#edit");
       const edit_menu=document.querySelector(".edit_menu");
        const button=document.querySelector("#change_button");
        let clicked=true;
        edit_button.addEventListener('click',()=>{
         edit_menu.classList.toggle("hidden");
        })

        button.addEventListener('click',()=>{



          const profilePic=document.querySelector("#fileInput");

          const currentPic=document.querySelector("#currentPic");

          profilePic.addEventListener("channge",()=>{
            selectedFile=profilePic.files[0];
          })




          change_button.addEventlistener('click',()=>{


            if(!selectedfile){
              alert("please select a file");
              return;
            }

            const formData=new formData();
            formData.append("profilepic",selectedfile);

            const response=await axios.post("http://localhost:3000/api/auth/profile-update",{formdata,token});

            console.log(response);
          })
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        
          // const pname=document.querySelector("#p_name").value;
          // const bio_p=document.querySelector("#p_bio").value;

          // bio.textContent=bio_p;
          // p_name.textContent=pname;
          edit_menu.classList.add('hidden');
        })
    
  