import React from "react";

function Process(){

const steps=[
"Discover",
"Strategy",
"Design",
"Development",
"Launch"
];


return(

<section className="
bg-[#071A1C]
text-white
py-20
">


<h1 className="
text-center
text-4xl
font-bold
">

Our Process

</h1>


<div className="
max-w-5xl
mx-auto
mt-10
grid
md:grid-cols-5
gap-5
px-5
">


{
steps.map((step,index)=>(

<div
key={index}
className="
bg-[#0D2B2E]
p-5
rounded-xl
text-center
border
border-white/10
"
>

<p className="text-green-400 text-2xl">
0{index+1}
</p>

<h2 className="mt-3">
{step}
</h2>


</div>

))

}


</div>


</section>

)

}

export default Process;