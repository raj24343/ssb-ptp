import React from 'react';
import Accordion from './Accordion.jsx';

export default function FAQ({ items }) {
  return <Accordion items={items.map(f => ({ title: f.q, content: f.a }))} />;
}