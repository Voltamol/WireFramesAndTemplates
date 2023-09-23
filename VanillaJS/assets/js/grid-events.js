
let getMode=()=>{
    const innerWidth = window.innerWidth;
    if(innerWidth<768){
        return 'mobile'
    }else{
        return 'desktop'
    }
}

let toggleSidebar=(mode)=>{
    if(mode=='mobile'){
        document.querySelector('.sidebar').classList.add('hidden')
    }else{
        document.querySelector('.sidebar').classList.remove('hidden')
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
            grid.dataset.gridchangeto=className
            grid.dataset.responsivemode=mode
            toggleSidebar(mode)
        }
    })
}
