function StartTasbeeh (){ 
       
        let Tasbeeh  = document.getElementById('Tasbeeh ');
        let btn = document.getElementById('btn');
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
        btn.style.backgroundColor = 'grey';
        btn.style.border="none";
        btn.style.transform = "none";

       
        setTimeout(()=>{ 
        
         let Count = 0;
         let intervalId = setInterval(() => {
             Count++;
             Tasbeeh.style.color = 'white';
             Tasbeeh.textContent = 'سبحان الله - ' + Count;
 
             if(Count === 33){
                 clearInterval(intervalId);
                 Count = 0;

                intervalId = setInterval(() => {
                        Count++;
                        Tasbeeh.style.color = 'red';
                        Tasbeeh.textContent = ' الحمد لله - ' + Count;

                        if(Count === 33){
                            clearInterval(intervalId);
                            Count = 0;
                            

                                intervalId = setInterval(() => {
                                    Count++;
                                    Tasbeeh.style.color = 'goldenrod';
                                    Tasbeeh.textContent = 'الله اكبر - ' + Count;

                                    if(Count === 33){
                                        clearInterval(intervalId);
                                        Tasbeeh.textContent ='لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير';
                                        Tasbeeh.style.color = 'green';
                                        btn.disabled = false;
                                       
                                        btn.style.cursor = 'pointer';
                                        setTimeout(() =>{
                                            alert('في ميزان حسناتكم');
                                        },500); 
                                        resetButton();
                                    }

                                }, 500);
                            
                        }

                        }, 500);              
                }

            }, 500);
               
        },800);
    }
    function resetButton() {
    btn.style.removeProperty('border');
    btn.style.removeProperty('transform');
    btn.style.removeProperty('background-color');
}