import React from "react";

function Work(){

const projects=[
{
title:"Business Website",
type:"Web Development",
img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f"
},
{
title:"E-Commerce Store",
type:"UI/UX Design",
img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
},
{
title:"Brand Identity",
type:"Creative Design",
img:"https://images.unsplash.com/photo-1558655146-d09347e92766"
}

];


return(

<section 
id="work"
className="
bg-[#071A1C]
text-white
py-20
">


<h1 className="
text-center
text-4xl
font-bold
">

Our Recent Work

</h1>


<p className="
text-center
text-gray-400
mt-3
">

Projects that create impact

</p>



<div className="
max-w-6xl
mx-auto
px-5
grid
md:grid-cols-3
gap-6
mt-10
">


{
projects.map((item,index)=>(

<div
key={index}
className="
bg-[#0D2B2E]
rounded-2xl
overflow-hidden
hover:-translate-y-2
transition
"
>


<img
src={item.img}
className="
h-48
w-full
object-cover
"
/>


<div className="p-5">

<h2 className="text-xl font-semibold">
{item.title}
</h2>

<p className="text-green-400 mt-2">
{item.type}
</p>

</div>


</div>

))

}


</div>


</section>

)

}

export default Work;