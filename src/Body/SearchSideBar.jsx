
import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';

function SearchSideBar({ showSideBar, setShowSideBar }) {
    const handleClose = () => setShowSideBar(false);

    const handleSearch = (searchData) => {
      console.log('Search Data:', searchData);
      handleClose();
  };

    return (
        <Offcanvas show={showSideBar} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <SearchForm onSearch={handleSearch} />
        </Offcanvas.Body>
      </Offcanvas>
    );

}

export default SearchSideBar;