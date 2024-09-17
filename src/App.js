import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import UserNotification from './pages/accounts/userNotification';
import UserPayment from './pages/accounts/userPayment';
import UserProfile from './pages/accounts/userProfile';
import IndexItSolution from './pages/index/indexItSolution';

import ContactTwo from './pages/contact/contactTwo';
import ContactOne from './pages/contact/contactOne';
import ContactDetail from './pages/contact/contactDetail';
import Blog from './pages/blog/blog';
import BlogYoutubePost from './pages/blog/blogYoutubePost';
import BlogVimeoPost from './pages/blog/blogVimeoPost';
import BlogStandardPost from './pages/blog/blogStandardPost';
import BlogSliderPost from './pages/blog/blogSliderPost';
import BlogSidebar from './pages/blog/blogSidebar';
import BlogLeftSidebarPost from './pages/blog/blogLeftSidebarPost';
import BlogGalleryPost from './pages/blog/blogGalleryPost';
import BlogDetail from './pages/blog/blogDetail';
import BlogBlockquotePost from './pages/blog/blogBlockquotePost';
import BlogAudioPost from './pages/blog/blogAudioPost';
import Industry  from './component/Industry';
import WhatWeDo from './component/whatWeDo'
import Switch from './component/Switch';

export default function App() {
    return (
        <BrowserRouter>
        {/* <Switch/> */}
            <Routes>
                <Route path="/" element={<Navigate to="/index" />} />
                <Route exact path="/index" element={<IndexItSolution />} />
                <Route exact path="/user-notification" element={<UserNotification />} />
                <Route exact path="/user-payment" element={<UserPayment />} />
                <Route exact path="/user-profile" element={<UserProfile />} />
                <Route exact path="/contact-two" element={<ContactTwo />} />
                <Route exact path="/contact-one" element={<ContactOne />} />
                <Route exact path="/contact-detail" element={<ContactDetail />} />
                <Route exact path="/industries/:id" element={<Industry />} />
                <Route exact path="/what-we-do/:id" element={<WhatWeDo />} />
                <Route exact path="/contact-detail/:id" element={<ContactDetail />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/blog-youtube-post" element={<BlogYoutubePost />} />
                <Route exact path="/blog-vimeo-post" element={<BlogVimeoPost />} />
                <Route exact path="/blog-standard-post" element={<BlogStandardPost />} />
                <Route exact path="/blog-slider-post" element={<BlogSliderPost />} />
                <Route exact path="/blog-sidebar" element={<BlogSidebar />} />
                <Route exact path="/blog-left-sidebar-post" element={<BlogLeftSidebarPost />} />
                <Route exact path="/blog-gallery-post" element={<BlogGalleryPost />} />
                <Route exact path="/blog-detail" element={<BlogDetail />} />
                <Route exact path="/blog-detail/:id" element={<BlogDetail />} />
                <Route exact path="/blog-blockquote-post" element={<BlogBlockquotePost />} />
                <Route exact path="/blog-audio-post" element={<BlogAudioPost />} />
            </Routes>
        
        </BrowserRouter>
    )
}
