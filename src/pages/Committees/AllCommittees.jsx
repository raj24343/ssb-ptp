import React, { useState } from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';

const committeeSections = [
  {
    id: 'grievance',
    title: 'Students Grievance Redressal Committee',
    desc: 'Addressing student concerns and ensuring fair resolution',
    content: 'The Students Grievance Redressal Committee serves as a vital link between students and the administration, ensuring that student concerns are addressed fairly, promptly, and transparently. Scope includes academic concerns, administrative issues, fee-related problems, infrastructure complaints, examination concerns, and hostel/campus life issues.'
  },
  {
    id: 'nptel',
    title: 'NPTEL Local Chapter',
    desc: 'National Programme on Technology Enhanced Learning',
    content: 'The NPTEL Local Chapter at SSB Puttaparthi serves as a dedicated center for promoting quality online education through NPTEL courses. We facilitate student enrollment, coordinate examinations, and support learning for various NPTEL certification programs. Course categories include Computer Science, Management & Economics, Mathematics, and Humanities.'
  },
  {
    id: 'academic',
    title: 'College Academic Committee',
    desc: 'Academic governance and oversight',
    content: 'The College Academic Committee oversees curriculum development, academic policies, and standards. It ensures alignment with industry requirements and regulatory guidelines while promoting innovation in teaching and learning methodologies.'
  },
  {
    id: 'iic',
    title: 'IIC Committee',
    desc: 'Institution Innovation Council',
    content: 'The Institution Innovation Council (IIC) promotes innovation and entrepreneurship among students and faculty. It facilitates idea incubation, startup support, and industry-academia linkages for innovative projects.'
  },
  {
    id: 'rnd',
    title: 'R & D Cell',
    desc: 'Research and Development Cell',
    content: 'The R&D Cell fosters research culture, encourages publications, and supports faculty and student research projects. It facilitates collaborations, grant applications, and research dissemination.'
  },
  {
    id: 'women',
    title: 'Women Empowerment Cell',
    desc: 'Women empowerment and support',
    content: 'The Women Empowerment Cell promotes gender equality, provides support mechanisms, and conducts awareness programs on women\'s rights and safety. It creates an inclusive environment for all students.'
  },
  {
    id: 'icc',
    title: 'Internal Complaint Committee',
    desc: 'Internal complaints and grievances',
    content: 'The Internal Complaint Committee (ICC) addresses complaints related to sexual harassment and ensures a safe workplace and campus environment in accordance with POSH guidelines.'
  },
  {
    id: 'library',
    title: 'Library Committee',
    desc: 'Library management and policies',
    content: 'The Library Committee oversees library operations, resource acquisition, and services. It ensures access to quality learning resources and promotes reading and research culture.'
  },
  {
    id: 'welfare',
    title: 'Student Welfare Committee',
    desc: 'Student welfare and support services',
    content: 'The Student Welfare Committee focuses on holistic student development, counseling services, and support for students facing academic or personal challenges.'
  },
  {
    id: 'extra',
    title: 'Extra Curricular Activities Committee',
    desc: 'Extra-curricular activities and events',
    content: 'The Extra Curricular Activities Committee organizes cultural programs, technical events, and co-curricular activities that complement academic learning and foster all-round development.'
  },
  {
    id: 'career',
    title: 'Career Guidance & Higher Education Cell',
    desc: 'Career guidance and higher education support',
    content: 'The Career Guidance Cell provides counseling, placement support, and guidance for higher studies. It maintains alumni connections and industry partnerships for career opportunities.'
  },
  {
    id: 'sports',
    title: 'Games & Sports Cell',
    desc: 'Sports and recreational activities',
    content: 'The Games & Sports Cell promotes sports and physical fitness through various events, inter-college competitions, and facility management. It encourages participation in athletics, indoor games, and outdoor sports.'
  }
];

function CommitteeAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="panel overflow-hidden">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full flex items-center justify-between text-left py-2"
      >
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">{item.title}</h3>
          <p className="text-sm text-[var(--text-muted)] mt-0.5">{item.desc}</p>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[var(--brand)]" /> : <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />}
      </button>
      {isOpen && (
        <div className="pt-4 mt-4 border-t border-[var(--border-light)]">
          <p className="text-[var(--text-soft)] leading-relaxed">{item.content}</p>
        </div>
      )}
    </div>
  );
}

export default function AllCommittees() {
  const [openId, setOpenId] = useState('grievance');

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="All Other Committees"
            subtitle="Institutional committees and cells"
            description="Overview of committees supporting academics, student welfare, and institutional governance"
          />

          <div className="space-y-section">
            <div className="space-y-4">
              {committeeSections.map((item) => (
                <CommitteeAccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
