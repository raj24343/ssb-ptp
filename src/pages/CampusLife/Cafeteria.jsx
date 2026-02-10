import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function Cafeteria() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Cafeteria"
            subtitle="Dining and food services"
            description="Nutritious and delicious meals for the campus community"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Dining Services</h2>
              <p>
                The SSB Cafeteria provides wholesome, nutritious, and delicious meals 
                to students and staff throughout the day. Our dining facilities are 
                designed to cater to diverse tastes and dietary requirements while 
                maintaining high standards of hygiene and quality.
              </p>
            </div>

            <div className="panel">
              <h2>Menu & Cuisine</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Daily Meals</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Breakfast: 7:30 AM - 9:30 AM</li>
                    <li>Lunch: 12:00 PM - 2:00 PM</li>
                    <li>Evening Snacks: 4:00 PM - 6:00 PM</li>
                    <li>Dinner: 7:30 PM - 9:30 PM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cuisine Options</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>South Indian traditional meals</li>
                    <li>North Indian dishes</li>
                    <li>Continental options</li>
                    <li>Special dietary meals available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Cafeteria Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Spacious dining hall with comfortable seating</li>
                <li>Modern kitchen with quality equipment</li>
                <li>Hygienic food preparation and serving</li>
                <li>Fresh ingredients sourced locally</li>
                <li>Vegetarian and vegan options available</li>
                <li>Special meals during festivals and events</li>
                <li>Affordable pricing for students</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Health & Hygiene</h2>
              <p>
                We maintain the highest standards of cleanliness and hygiene in our 
                food preparation and service areas. Our kitchen staff is trained in 
                food safety practices, and regular health inspections ensure compliance 
                with all food safety regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}