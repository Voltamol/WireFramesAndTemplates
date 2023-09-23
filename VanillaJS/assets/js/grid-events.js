const innerWidth = window.innerWidth;

let getMode=()=>{
    if(innerWidth<768){
        return 'mobile'
    }else{
        return 'desktop'
    }
}

let changeTemplateColumns=()=>{
    //assuming mobile first...
    Array.from(document.getElementsByClassName('responsive-grid')).forEach((grid)=>{
        let className=grid.dataset.gridclassname
        let newLayout=grid.dataset.gridchangeto
        let responsivemode=grid.dataset.responsivemode
        let mode=getMode()
        if(responsivemode!=mode){
            //setting className...
            grid.classList.remove(className)
            grid.classList.add(newLayout)
            //setting data attribute...
            grid.dataset.gridclassname=newLayout
            grid.dataset.changeto=className
            grid.dataset.responsivemode=mode
        }
    })
}
