const Blogs = async ({params})=>{
  console.log(await params);
  const {blogID} = await params
   return(
         <>
            <h1>Blogs:{blogID}</h1>
         </>
   )
}

export  default Blogs