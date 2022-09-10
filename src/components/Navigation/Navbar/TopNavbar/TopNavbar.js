import React from 'react';
import SearchInput from '../../../UI/SearchInput/SearchInput';
import './TopNavbar.css';

// == top navbar section ==
const TopNavbar = () => {
    return (
        <div>
            <SearchInput placeholder='نام کتاب، نویسنده، ناشر و ... را جستجو کنید' />
        </div>
    )
}

export default TopNavbar;