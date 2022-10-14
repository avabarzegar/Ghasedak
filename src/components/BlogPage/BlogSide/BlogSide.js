import React from "react";
import BlogSideCard from "./BlogSideCard/BlogSideCard";
import Img from "../../../assets/Images/Asset 2@320x-8 1 (1).png";

// define blog page sidebar 
const BlogSide=()=>{
    return(
        <aside>
            <BlogSideCard 
            img={Img}
            title="پرفروش ترین کتاب های جهان کدام اند؟"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ..."
            message="12"
            view="364"
            author="ساغر خوش نویس"
            date="1401/05/22"
            />
            <BlogSideCard 
            img={Img}
            title="پرفروش ترین کتاب های جهان کدام اند؟"
            text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ..."
            message="12"
            view="364"
            author="ساغر خوش نویس"
            date="1401/05/22"
            />
        </aside>
    )
}
// define blog page sidebar -end

export default BlogSide;