import $ from 'jquery';

export function filePreview(){
  $(function(){
    let inputFile = $('#breefattach');
    let button = $('#filebutton');
    let filesContainer = $('#previewfiles');
    let files = [];
    
    inputFile.change(function() {
      let newFiles = []; 
      for(let index = 0; index < inputFile[0].files.length; index++) {
        let file = inputFile[0].files[index];
        newFiles.push(file);
        files.push(file);
      }
      
      newFiles.forEach(file => {
        let fileElement = $(`<p>${file.name}</p>`);
        fileElement.data('fileData', file);
        filesContainer.append(fileElement);
        
        fileElement.click(function(event) {
          let fileElement = $(event.target);
          let indexToRemove = files.indexOf(fileElement.data('fileData'));
          fileElement.remove();
          files.splice(indexToRemove, 1);
        });
      });
    });
    
    button.click(function() {
      inputFile.click();
    });
  });

  const clearFile = document.querySelector('.clearfile');
  const previewFiles = document.getElementById('previewfiles');
  const inputFiles = document.getElementById('breefattach');
  const sizeCounter = document.querySelector('.counter-size__current')

  clearFile.addEventListener('click',function(){
    const inNull = 0;
    previewFiles.innerHTML = '';
    inputFiles.value = '';
    sizeCounter.innerHTML = inNull;

  });

}


