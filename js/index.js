/*** references to active HTML elements ***/
const btns = document.querySelectorAll('.action button'); // event target object
const newContent = document.querySelector('.content');

/*** event handler ***/
function addContent(ev)
{
    let clickedButton = ev.target;
    for(let btn of btns)
    {
        if(btn.hasAttribute('id'))
        {
            btn.removeAttribute('id');
        }
    }
   
    clickedButton.id='active-button';

    if(clickedButton.value === 'c1')
    {
       newContent.innerHTML=`<figure class="newContent">
                                <img src="img/community-solar.jpg" alt="Community Solar"  class = "img1"/>
                            </figure>
                            <p>A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses.
                            The solar garden would power each home’s water, heat and electricity while the entire community would split the lower energy 
                            costs. Community solar projects have benefited many lower-income communities in places like Denver, Colorado. Plus, they’re 
                            growing in popularity. </p>`;       
        
    } 

    else if(clickedButton.value === 'c2')
    {
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/wind-power.jpg" alt="Wind Power" class = "img1"/>
                              </figure>
                             <p>Like the declining costs of solar power, the cost of wind power has decreased by 90 percent since the 1980s. With declining
                            costs comes more incentive to invest, and communities have come together to build wind farms to power local businesses. By 
                            operating off the power of small wind farms, communities who suffer from high energy costs can work together for a better future.
                            </p>`; 
    } else 
    {
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/solar2.jpg" alt="Solar for Employee"  class = "img1"/>
                              </figure>
                             <p>Employees of these companies will be able to buy or lease residential solar PV systems at reduced cost as one of their 
                             corporate benefits, using an online marketer of solar PV systems, Geostellar. As a result, the employees and some friends and 
                             family can achieve solar at rates substantially lower than the national average – about 17 percent lower than the already-low 
                             price that Geostellar usually achieves, and almost 34 percent lower than the average cost in the United States. </p>`; 
    }
    
}


for(let btn of btns){
  btn.addEventListener('click', addContent);
}
