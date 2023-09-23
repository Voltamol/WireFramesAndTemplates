//initial check...(assuming mobile first...)
if(innerWidth>768){
    changeTemplateColumns()
}

onresize=(e)=>{
    switch (true) {
    case innerWidth > 1024:
        changeTemplateColumns()
        break;
    case innerWidth < 768:
        changeTemplateColumns()
        break;
    default:
        changeTemplateColumns()
        break;
    }
}