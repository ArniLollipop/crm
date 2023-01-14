import React from 'react';

function Plus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="#000"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className='w-6 h-6'
    >
      <path d="M272 128L240 128 240 240 128 240 128 272 240 272 240 384 272 384 272 272 384 272 384 240 272 240z"></path>
      <path d="M256 0C114.609 0 0 114.609 0 256s114.609 256 256 256 256-114.609 256-256S397.391 0 256 0zm0 472c-119.297 0-216-96.703-216-216S136.703 40 256 40s216 96.703 216 216-96.703 216-216 216z"></path>
    </svg>
  );
}

export default Plus;