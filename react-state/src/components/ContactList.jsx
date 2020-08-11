import React from 'react';

const people = [
  { name: 'José', number: '210222333' },
  { name: 'Santi', number: '210333555' },
  { name: 'Aline', number: '210111333' },
  { name: 'Gonçalo', number: '210555777' }
];

const ContactList = () => {
  return (
    <div>
      {people.map(person => {
        return (
          <p key={person.number}>
            {person.name} - {person.number}
          </p>
        );
      })}
      {/* {people.map(person => (
        <span>{person}</span>
      ))} */}
      {/* {[
        <span>José</span>,
        <span>Santi</span>,
        <span>Aline</span>,
        <span>Gonçalo</span>
      ]}
      <span>José</span>
      <span>Santi</span>
      <span>Aline</span>
      <span>Gonçalo</span> */}
    </div>
  );
};

export default ContactList;
