import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

const UserProfileCard = () => {
  return (
    <div className="jr-card text-center">
      <div className={`jr-card-header-color bg-gradient-primary`}>
        <div className="jr-card-header-top">
          <IconButton className="jr-fs-lg text-white" aria-label="Menu"><i className="zmdi zmdi-menu"/></IconButton>
          <IconButton className="icon-btn p-1 text-white ml-auto"><i className="zmdi zmdi-more-vert"/></IconButton>
        </div>

        <img className="rounded-circle size-80 avatar-shadow mb-3"
             src={require("../../../assets/agent.jpg")} alt="Team Member"/>

        <div className="jr-card-hd-content">
          <h5 className="mb-0 text-white">Dom Harris</h5>
          <p className="jr-fs-sm mb-0 text-grey text-lighten-2">Assets Analyst</p>
        </div>
        <Fab className="jr-badge-up bg-success"><i className="zmdi zmdi-comment-outline"/></Fab>
      </div>
      <div className="jr-card-body pt-2">
        <p className="card-text">Our consultants provide personal advices for your portfolio</p>
      </div>
    </div>
  )
};

export default UserProfileCard;

