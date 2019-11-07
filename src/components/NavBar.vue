<template>
    <div class="navbar">
       <div class="fa fa-thumbs-up"></div>

       <router-link activeClass='on' to='/over' tag="div"> 
    
          <div class="fa fa-industry"> <span>概况</span></div>
       </router-link>

        <router-link activeClass='on' to='/cmd' tag="div"> 
       
          <div class="fa fa-magnet"> <span>商品</span></div>
       </router-link>

        <router-link activeClass='on' to='/order' tag="div"> 

            <div class="fa fa-industry"> <span>订单</span></div>
            </router-link>
        
        <router-link activeClass='on' to='/cut' tag="div"> 
    
        <div class="fa fa-flag"> <span>客户</span></div>
        </router-link>
     
    </div>
</template> 
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.navbar{
    width: 92px;
    height: 100%;
    background:#444444;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;  
    >div{
         width: 100%;
         height: 40px;
         display: flex;
         justify-content: center;
         align-items: center;
         color:rgba(251,251,251,1);
         span{
             font-size: 14px;
             padding-left: 8px;
         }
    }
    >div:nth-child(1){
        height: 56px;
    }
    .on{
        background: white;
        color: black;
    }
}
</style>