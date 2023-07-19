import React from 'react'
import Modal from '../components/Modal';
import Navbar from '../components/Navbar'
import Table from '../components/Table';

const Dashboard = () => {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Modal />
      <div className="mt-5">
       <Table />
      </div>
    </div>
  );
}

export default Dashboard