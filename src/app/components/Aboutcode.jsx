"use client"

import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Aboutcode = () => {
  const code1 = "class"
  const code2 = " Harsh Pal"
  const code121 = " {"
  const code3 = "//Live, Laugh, Code"
  const code4 = "//My arsenal of skills not only continues to grow but also evolves as I dive into learning new technologies."
  const code5 = "constructor"
  const code6 = "() {"

  const BlinkingCursor = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      
      const intervalId = setInterval(() => {
        setIsVisible((prevVisible) => !prevVisible);
      }, 500);

      
      return () => clearInterval(intervalId);
    }, []);

    
    return (
      <span className="blinking-cursor">
        {isVisible ? '|' : ' '}
      </span>
    );
  };


  return (
    <section className="text-pink-500 " id="about">

      <div className="py-0 lg:py-8 px-0 lg:px-4   ">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base px-0 lg:px-12 py-0 lg:py-8 lg:text-lg">
            <code className='code'>
              {/* 1 line */}
              <span className="hover hover:bg-gray-700 w-full  inline-block">
                <code className='functions'>{code1}</code>
                <code className='name'>{code2}</code>
                <code className='text-yellow-600'>{code121}</code>
              </span><br />
              {/* end line */}

              <span className="hover hover:bg-gray-700 w-full  inline-block">
                <span className='dot'>....</span>
                <code className='comments'>{code3}</code>
              </span>
              <br />
              <span className='hover hover:bg-gray-700 w-full inline-block'>
                <span className='dot'>....</span>
                <code className='comments'>{code4}</code>
              </span><br />
              <span className='hover hover:bg-gray-700 w-full inline-block'>
                <span className='dot'>....</span>
                <code className='name'>{code5}</code>
                <code className='symb1'>{code6}</code>
              </span><br />
            </code>
            <code className="code">



              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>........</span>
                <span className='functions'>this</span>
                <span className='text-blue-300'>.name</span>
                <span className='text-white'> = </span>
                <span className=''>'Harsh Pal'</span>
                <span className='text-white'>;</span>
              </span><br />

              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>........</span>
                <span className='functions'>this</span>
                <span className='text-blue-300'>.email</span>
                <span className='text-white'> = </span>
                <span className=''>'contacthp311@gmail.com'</span>
                <span className='text-white'>;</span>
              </span><br />
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>......</span>
                <span className='symb1'>{' }'}</span>
              </span><br />


              {/* Education */}
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>......</span>
                <span className='functions'>education</span>
                <span className='symb1'>{'() {'}</span>
              </span><br />
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>........</span>
                <span className='symb1'>return</span>
                <span className='text-blue-600'>{' ['}</span>
              </span><br />
              {/* Education entries */}
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>............</span>
                <span className='text-yellow-600'>{'{ '}</span>
                <span className='text-blue-600'>{'2020-now'}</span>
                <span className='text-white'>: </span>
                <span className=''>'Guru Gobind Singh Indraprastha University - Bachelor of Technology, Information Technology'</span>
                <span className='text-yellow-600'> {'}'}</span>
              </span><br />

              {/* ... other work experiences */}
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>........</span>
                <span className='text-blue-600'>{'];'}</span>
              </span><br />

              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>......</span>
                <span className='symb1'>{' }'}</span>
              </span><br />

              {/* skills */}
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>......</span>
                <span className='functions'>skills</span>
                <span className='symb1'>{'() {'}</span>
              </span><br />
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>........</span>
                <span className='symb1'>return</span>
                <span className='text-blue-600'>{' ['}</span><br/>
                
                
              </span><br />

              <span className='hover hover:bg-gray-700 w-full inline-block'>
              <span className='dot'>............</span>
              <span className='text-yellow-600'>{'{ '}</span>
                'HTML/CSS/JS', 'Node.js', 'Bootstrap', 'Tailwind', 
                'npm/yarn', 'Firebase', 'MySQL/MongoDB/NoSQL/PostgreSQL',
                 'AWS', 'TypeScript', 'React.js/Next.js',
                 'Express.js', 'Postman', '<BlinkingCursor />'
                 
                   </span><br/>
                   <span className='hover hover:bg-gray-700 w-full inline-block'>
                   <span className='dot'>............</span>
                   <span className='text-yellow-600'> {' }'}</span></span><br/>

              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>........</span>
                <span className='text-blue-600'>{'];'}</span>
              </span><br />

              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>......</span>
                <span className='symb1'>{' }'}</span>
              </span><br />
{/* About me */}
<span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>......</span>
                <span className='functions'>aboutMe</span>
                <span className='symb1'>{'() {'}</span>
              </span><br />
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>........</span>
                <span className='symb1'>return</span>
                <span className='text-blue-600'>{' ['}</span>
              </span><br />
              {/* Education entries */}
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>............</span>
                <span className='text-yellow-600'>{'{ '}</span>
                <span className=''>Hi there, I am a final-year Information Technology undergraduate at Dr. Akhilesh Das Gupta Institute Of Technology and Management (GGSIPU), Delhi. I'm a Full-stack developer with an interest in various domains. Proficient and experienced in the MERN stack, PostgreSQL, I am currently diving into advanced technologies in web development. I am well-versed in Javascript/Typescript as well. Currently, I am focused on building new projects that offer me opportunities to learn new skills and technologies.
 </span><br/></span>
 <span className="hover hover:bg-gray-700 w-full inline-block">
                <br/>
                <span className='dot'>............</span>
                <span>I have hands-on experience in developing a fully-fledged MERN stack project from scratch, which is currently deployed at <a href='https://shivajewellers.netlify.app/' target='_blank' style={{ textDecoration: 'underline' }}>shivajewellers</a>.
                Additionally, I've contributed to the development of an open-source, publicly available API for the game <a href='https://github.com/devesh-anand/genshin-api' target='_blank' style={{ textDecoration: 'underline' }}>Genshin Impact</a>.
                </span><br/>
              </span><br />
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <br/>
                <span className='dot'>............</span>
                <span>I am also a past 12 AM poet, a avid listner and a good speaker. If you want to connect with me, you can reach through handles given in contact section of this webpage.
                </span>
              </span>
              <span className='hover hover:bg-gray-700 w-full inline-block'>
                   <span className='dot'>............</span>
                   <span className='text-yellow-600'> {' }'}</span></span><br/>

              {/* ... other work experiences */}
              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>........</span>
                <span className='text-blue-600'>{'];'}</span>
              </span><br />

              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>......</span>
                <span className='symb1'>{' }'}</span>
              </span><br />

              {/* workExperience 
  <span className="hover hover:bg-gray-700 w-full inline-block">
    <span className='dot'>......</span>
    <span className='functions'>workExperience</span>
    <span className='symb1'>{'() {'}</span>
  </span><br />
  <span className="hover hover:bg-gray-700 w-full inline-block">
    <span className='dot'>........</span>
    <span className='symb1'>return</span>
    <span className='text-blue-600'>{' ['}</span>
  </span><br />
  {/* Work experiences entries 
  <span className="hover hover:bg-gray-700 w-full inline-block">
    <span className='dot'>............</span>
    <span className='text-yellow-600'>{'{ '}</span>
    <span className='text-blue-600'>{'2020-now'}</span>
    <span className='text-white'>: </span>
    <span className=''>'Full-stack Developer/Owner at Pixel Lab'</span>
    <span className='text-white'> {'}'}</span>
  </span><br />
  <span className="hover hover:bg-gray-700 w-full inline-block">
    <span className='dot'>............</span>
    <span className='text-yellow-600'>{'{ '}</span>
    <span className='text-blue-600'>{'2023-now'}</span>
    <span className='text-white'>: </span>
    <span className=''>'Solutions Architect at Digitree Group S.A.'</span>
    <span className='text-white'>{'}'}</span>
  </span><br />
  {/* ... other work experiences 
  <span className="hover hover:bg-gray-700 w-full inline-block">
    <span className='dot'>........</span>
    <span className='text-blue-600'>{'];'}</span>
  </span><br />
  
  <span className="hover hover:bg-gray-700 w-full inline-block">
    <span className='dot'>......</span>
    <span className='symb1'>{' }'}</span>
  </span><br />
*/}

              <span className="hover hover:bg-gray-700 w-full inline-block">
                <span className='dot'>....</span>
                <span className='text-yellow-600'>{'}'}</span>
              </span><br />
            </code>

          </p>
        </div>
      </div>

    </section>
  );
}

export default Aboutcode;
