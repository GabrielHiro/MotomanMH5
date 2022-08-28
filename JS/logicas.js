var btn = document.getElementById('btn-InOut');
var InOutOpen = document.querySelector('.e6_58');
var i = 0;
var Control = document.getElementById('btn-control');
var ControlOpen = document.querySelector('.group_30_203_3');
var a = 0;
btn.addEventListener('click', function() {
    
  if(InOutOpen.style.display === 'block' && a === 0) {
      InOutOpen.style.display = 'none';
      i = 0;
  } else if(a === 0){
      InOutOpen.style.display = 'block';
      i = 1
  }
});
Control.addEventListener('click', function() {
    
      if(ControlOpen.style.display === 'block' && i === 0) {
            ControlOpen.style.display = 'none';
            a = 0;
      } else if(i === 0){
            ControlOpen.style.display = 'block';
            a = 1
      }
    });