
  
  const faqArray = [
    {id:"1", title:'WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN? ', desc:"I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."},
    {id:"2", title:'WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN? ', desc:"I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."},
    {id:"3", title:'WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN? ', desc:"I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."}
  ];
  
  const faqContainer = document.getElementById("faq-container");
  let activeId = 3;
  
  faqArray.forEach(data => {
  const accordionItem = document.createElement("div")
  accordionItem.innerHTML = `
    <div style="display:flex; height:100px; padding: 30px 20px; max-height:130px; border:0.5px solid rgba(128, 128, 128, 0.38); overflow:hidden; border-radius:5px; " >
    <div>
      <p style="font-size:15px; color:rgba(233, 233, 233, 0.79); margin-bottom:20px; " >${data.title}</p>
    <p style="font-size:12px; color:rgba(128, 128, 128, 0.79);" >${data.desc}</p>
    </div>
    <div><button style=" background:none; border:0.5px solid rgba(128, 128, 128, 0.38); padding:10px 12px; border-radius: 25px; color:rgba(128, 128, 128, 0.85);" >${activeId == data.id ? ">" : '<'}</button></div>
    </div>
  `;
  faqContainer.appendChild(accordionItem)
})

AOS.init({
    mirror: true
  });
