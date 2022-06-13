window.addEventListener("load", solve);

function solve() {
  const inputtitle = document.getElementById('post-title')
  const inputcategory = document.getElementById('post-category')
  const inputcontent = document.getElementById('post-content')
  const publishButton = document.getElementById('publish-btn').addEventListener('click',publishOn)
  const reviewList = document.getElementById('review-list')
  const publishList = document.getElementById('published-list')

  function publishOn(ev){
    if (inputtitle.value !== "" &&
    inputcategory.value !== "" &&
    inputcontent.value !== ""){
      let li  = document.createElement('li')
      li.className  = 'rpost'
      let article = document.createElement('article')
      let h4 = document.createElement('h4')
      h4.textContent = inputtitle.value
      let pCat  = document.createElement('p')
      pCat.textContent = "Category: "  + inputcategory.value
      let pCont = document.createElement('p')
      pCont.textContent = "Content: " + inputcontent.value
      let buttonEdit = document.createElement('button')
      buttonEdit.className = "action-btn edit"
      buttonEdit.textContent = 'Edit'
      let buttonApprove = document.createElement('button')
      buttonApprove.className = "action-btn approve"
      buttonApprove.textContent = 'Approve'
      reviewList.appendChild(li)
      li.appendChild(article)
      article.appendChild(h4)
      article.appendChild(pCat)
      article.appendChild(pCont)
      li.appendChild(buttonApprove)
      li.appendChild(buttonEdit)
      _inputtitle = inputtitle.value
      _inputcat = inputcategory.value
      _intputcont = inputcontent.value
    
      inputtitle.value = ''
      inputcategory.value = ''
      inputcontent.value = ''

   
      buttonApprove.addEventListener('click',(ev) =>
      approvebut(ev, _inputtitle, _inputcat, _intputcont)
      );
      buttonEdit.addEventListener("click", (ev) =>
        editbut(ev, _inputtitle, _inputcat, _intputcont)
      );
    

    }

    

  }
  

  function approvebut(ev, _titleInputEl, _categoryInputEl, _contentInputEl) {
    ev.target.parentNode.remove();

    let li  = document.createElement('li')
    li.className  = 'rpost'
    let article = document.createElement('article')
    let h4 = document.createElement('h4')
    h4.textContent = _titleInputEl
    let pCat  = document.createElement('p')
    pCat.textContent = 'Category:'  + _categoryInputEl
    let pCont = document.createElement('p')
    pCont.textContent = "Content:" + _contentInputEl
    publishList.appendChild(li)
    li.appendChild(article)
    article.appendChild(h4)
    article.appendChild(pCat)
    article.appendChild(pCont)


    const clearbtn = document.getElementById('clear-btn').addEventListener('click',clearBtn)

  }
  function clearBtn(ev){
    publishList.innerHTML = ''

  }
  function editbut(ev, _titleInputEl, _categoryInputEl, _contentInputEl) {
    ev.target.parentNode.remove();

    inputtitle.value = _titleInputEl;
    inputcategory.value = _categoryInputEl;
    inputcontent.value = _contentInputEl;

  }

}
