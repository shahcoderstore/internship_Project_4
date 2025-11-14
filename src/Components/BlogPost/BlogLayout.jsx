import React from 'react';
// import { Search, Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react';
import { CiSearch } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import styles from "../../StylesCSS/BlogPostPageCSS/BlogLayout.module.css"
export default function BlogLayout() {
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.tmainContent}>
        {/* Blog Post 1 */}
        <article className={styles.blogPost}>
          <img 
            src="https://cafedine-bootstrap.vercel.app/images/blog/1.jpg" 
            alt="Festive food" 
            className={styles.blogImage}
          />
          <div className={styles.blogMeta}>
            <span className={styles.category}>Cooking</span>
            <span className={styles.date}>Oct 16, 2019</span>
            <span className={styles.comments}>06 Comment (s)</span>
          </div>
          <h2 className={styles.blogTitle}>The Festive Season Is Approaching</h2>
          <p className={styles.blogExcerpt}>
            The little rotter stuffing good time lemon squeezy smashing excuse my French old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless here.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </article>

        {/* Blog Post 2 */}
        <article className={styles.blogPost}>
          <img 
            src="https://cafedine-bootstrap.vercel.app/images/blog/2.jpg" 
            alt="Delicious food" 
            className={styles.blogImage}
          />
          <div className={styles.blogMeta}>
            <span className={styles.category}>Cooking</span>
            <span className={styles.date}>Oct 16, 2019</span>
            <span className={styles.comments}>06 Comment (s)</span>
          </div>
          <h2 className={styles.blogTitle}>Join Us For A Delicious Event</h2>
          <p className={styles.blogExcerpt}>
            The little rotter stuffing good time lemon squeezy smashing excuse my French old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless here.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </article>
        <article className={styles.blogPost}>
          <img 
            src="https://cafedine-bootstrap.vercel.app/images/blog/3.jpg" 
            alt="Delicious food" 
            className={styles.blogImage}
          />
          <div className={styles.blogMeta}>
            <span className={styles.category}>Cooking</span>
            <span className={styles.date}>Oct 16, 2019</span>
            <span className={styles.comments}>06 Comment (s)</span>
          </div>
          <h2 className={styles.blogTitle}>Join Us For A Delicious Event</h2>
          <p className={styles.blogExcerpt}>
            The little rotter stuffing good time lemon squeezy smashing excuse my French old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless here.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </article>
        <article className={styles.blogPost}>
          <img 
            src="https://cafedine-bootstrap.vercel.app/images/blog/4.jpg" 
            alt="Delicious food" 
            className={styles.blogImage}
          />
          <div className={styles.blogMeta}>
            <span className={styles.category}>Cooking</span>
            <span className={styles.date}>Oct 16, 2019</span>
            <span className={styles.comments}>06 Comment (s)</span>
          </div>
          <h2 className={styles.blogTitle}>Join Us For A Delicious Event</h2>
          <p className={styles.blogExcerpt}>
            The little rotter stuffing good time lemon squeezy smashing excuse my French old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless here.
          </p>
          <button className={styles.readMoreBtn}>READ MORE</button>
        </article>
      </div>

      {/* Sidebar */}
      <aside className={styles.sidebar}>
        {/* Search Box */}
        <div className={styles.searchBox}>
          <input 
            type="text" 
            placeholder="Search..." 
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>
            <CiSearch size={18} />
          </button>
        </div>

        {/* Follow Us */}
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <CiFacebook size={20} className={styles.icon} />
            <CiTwitter size={20} className={styles.icon} />
            <AiOutlineYoutube size={20} className={styles.icon} />
            <FaLinkedinIn size={20} className={styles.icon} />
            {/* <div style={{...styles.icon, fontSize: '20px'}}>P</div> */}
            <CiInstagram size={20} className={styles.icon} />
          </div>
        </div>

        {/* Popular Posts */}
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Popular Posts</h3>
          
          <div className={styles.popularPost}>
            <img 
              src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=100&h=80&fit=crop" 
              alt="Fried chicken" 
              className={styles.postThumb}
            />
            <div className={styles.postInfo}>
              <h4 className={styles.postTitle}>Salted Fried Chicken Recipe.</h4>
              <span className={styles.postDate}>May 16, 2019</span>
            </div>
          </div>

          <div className={styles.popularPost}>
            <img 
              src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=100&h=80&fit=crop" 
              alt="Rosemary rice" 
              className={styles.postThumb}
            />
            <div className={styles.postInfo}>
              <h4 className={styles.postTitle}>Lemon Rosemary Rice Cooking.</h4>
              <span className={styles.postDate}>May 16, 2019</span>
            </div>
          </div>

          <div className={styles.popularPost}>
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100&h=80&fit=crop" 
              alt="Delicious event" 
              className={styles.postThumb}
            />
            <div className={styles.postInfo}>
              <h4 className={styles.postTitle}>Join Us For A Delicious Event</h4>
              <span className={styles.postDate}>May 16, 2019</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Categories</h3>
          <ul className={styles.categoryList}>
            <li className={styles.categoryItem}>
              <span>Web Design</span>
              <span className={styles.count}>(14)</span>
            </li>
            <li className={styles.categoryItem}>
              <span>Development</span>
              <span className={styles.count}>(12)</span>
            </li>
            <li className={styles.categoryItem}>
              <span>Marketing</span>
              <span className={styles.count}>(10)</span>
            </li>
            <li className={styles.categoryItem}>
              <span>Video Production</span>
              <span className={styles.count}>(1)</span>
            </li>
          </ul>
        </div>

        {/* Popular Tags */}
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Popular Tags</h3>
          <div className={styles.tagCloud}>
            <span className={styles.tag}>Design</span>
            <span className={styles.tag}>Marketing</span>
            <span className={styles.tag}>Development</span>
            <span className={styles.tag}>Seo</span>
            <span className={styles.tag}>Agency</span>
            <span className={styles.tag}>Wordpress</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
