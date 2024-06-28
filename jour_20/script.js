const button = document.getElementById('button')
const ripple_button = document.getElementById('ripple-button')

// construction du keyframe
const keyframe = [{ 
        transform: 'scale(0)'
    },
    {
       transform:  'scale(0.25)'
    },
  { 
       transform:  'scale(0.5)'
    },
    {
       transform:  'scale(0.75)'
    },
    {
        transform:  'scale(0.85)'
    },
   {
        transform:  'scale(0.95)'
    },
    { 
       transform:  'scale(1)'
    }]
    
  
const animation = ripple_button.animate(keyframe,{duration : 400,
    easing: 'ease-in-out'})// construction de l'animation
   
button.addEventListener('click',(e)=>{
      ripple_button.style.transformOrigin = `${e.offsetX + 150}px ${e.offsetY +100}px`//détermination de l'origine du boutton
   
      animation.play()
})
