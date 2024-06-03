$("#darkLight").click(function(){
    $("body").toggleClass("dark")
    $(".about").toggleClass("dark")
})
// SideBar
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector("#logo");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

  // Btns
  $("#metal").click(function(){
    $("#all").removeClass("active");
    $("#metal").addClass("active");
    $("#mirror").removeClass("active");
    $("#photo").removeClass("active");
    $("#wall").removeClass("active");
    $("#animal").removeClass("active");
    $("#shelves").removeClass("active");
    $(".mir").hide(1000);
    $(".fra").hide(1000);
    $(".ani").hide(1000);
    $(".she").hide(1000);
    $(".wal").hide(1000);
    $(".met").show(1000);
  })
  $("#all").click(function(){
    $("#all").addClass("active");
    $("#metal").removeClass("active");
    $("#mirror").removeClass("active");
    $("#photo").removeClass("active");
    $("#wall").removeClass("active");
    $("#animal").removeClass("active");
    $("#shelves").removeClass("active");
    $(".mir").show(1000);
    $(".met").show(1000);
    $(".fra").show(1000);
    $(".ani").show(1000);
    $(".she").show(1000);
    $(".wal").show(1000);
  })
  $("#mirror").click(function(){
    $("#mirror").addClass("active");
    $("#metal").removeClass("active");
    $("#all").removeClass("active");
    $("#photo").removeClass("active");
    $("#wall").removeClass("active");
    $("#animal").removeClass("active");
    $("#shelves").removeClass("active");
    $(".met").hide(1000);
    $(".fra").hide(1000);
    $(".ani").hide(1000);
    $(".she").hide(1000);
    $(".wal").hide(1000);
    $(".mir").show(1000);
  })
  $("#photo").click(function(){
    $("#mirror").removeClass("active");
    $("#metal").removeClass("active");
    $("#all").removeClass("active");
    $("#photo").addClass("active");
    $("#wall").removeClass("active");
    $("#animal").removeClass("active");
    $("#shelves").removeClass("active");
    $(".met").hide(1000);
    $(".mir").hide(1000);
    $(".ani").hide(1000);
    $(".she").hide(1000);
    $(".wal").hide(1000);
    $(".fra").show(1000);
  })
  $("#wall").click(function(){
    $("#mirror").removeClass("active");
    $("#metal").removeClass("active");
    $("#all").removeClass("active");
    $("#photo").removeClass("active");
    $("#wall").addClass("active");
    $("#animal").removeClass("active");
    $("#shelves").removeClass("active");
    $(".met").hide(1000);
    $(".fra").hide(1000);
    $(".ani").hide(1000);
    $(".she").hide(1000);
    $(".mir").hide(1000);
    $(".wal").show(1000);
  })
  $("#animal").click(function(){
    $("#mirror").removeClass("active");
    $("#metal").removeClass("active");
    $("#all").removeClass("active");
    $("#photo").removeClass("active");
    $("#wall").removeClass("active");
    $("#animal").addClass("active");
    $("#shelves").removeClass("active");
    $(".met").hide(1000);
    $(".fra").hide(1000);
    $(".mir").hide(1000);
    $(".she").hide(1000);
    $(".wal").hide(1000);
    $(".ani").show(1000);
  })
  $("#shelves").click(function(){
    $("#mirror").removeClass("active");
    $("#metal").removeClass("active");
    $("#all").removeClass("active");
    $("#photo").removeClass("active");
    $("#wall").removeClass("active");
    $("#animal").removeClass("active");
    $("#shelves").addClass("active");
    $(".met").hide(1000);
    $(".fra").hide(1000);
    $(".ani").hide(1000);
    $(".mir").hide(1000);
    $(".wal").hide(1000);
    $(".she").show(1000);
  })
  
  // New Arr
  $.ajax({
    url:"newarr.json",
    type:"get",
    success:function(data1){
      let na="";
      $.each(data1,function(index,items){
na+=`
<div class="product-card swiper-slide">
<div class="main-images">
  <img class="active" src="${items.image}">
</div>
<div class="shoe-details">
  <span class="shoe_name">${items.name}</span>
  <p>${items.brand}</p>
  <div class="stars">
    <i class='bx bxs-star'></i>
    <i class='bx bxs-star' ></i>
    <i class='bx bxs-star' ></i>
    <i class='bx bxs-star' ></i>
    <i class='bx bx-star' ></i>
  </div>
</div>
<div class="color-price">
  <div class="price">
    <span class="price_num"> Price : Rs  ${items.price}</span>
  </div>
</div>
<div class="button">
  <div class="button-layer"></div>
  <button data-bs-toggle="modal" data-bs-target="#exampleModal${items.id}">Shop Now</button>
</div>
</div>` 
      });
      $(".newarr").html(na);

    }

  });
  $.ajax({
    url:"newarr.json",
    type:"get",
    success:function(data){
      let b="";
      $.each(data,function(key,value){
        b+=`
<div class="modal fade" id="exampleModal${value.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="row>"
  <div class="col-6">
    <img src="${value.image}" width="20%" height="250px" class="card-img-top" alt="...">
  </div>
  <div class="col-6">
  <h6>${value.name}</h6>
  <h6>${value.brand}</h6> 
  <h6 class="card-text" > Price : Rs <span  >${value.price}</span></h6>
<button type="button" class=" btn btn-primary"><a href="newarrdetail.html?id=${value.id}"
style="text-decoration:none;color:white;">Add To Cart</a></button>
</div>  
</div>
</div>
</div>
</div>
</div>
        
        `
      });
      $(".mod").html(b);
    }
  });