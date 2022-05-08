import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/6 h-screen flex flex-col mx-auto justify-center my-5'>
            <div className='my-5'>
                <p className='text-3xl my-2'>Difference between JavaScript and NodeJS</p>
                <p className='text-xl'><span className='font-bold'>Ans: </span>JavaScript is a basic programming language that may be executed in any browser that supports the JavaScript Engine. Whereas Node JS is an interpreter or execution environment for the JavaScript programming language, it requires libraries that can be readily accessible from JavaScript programming for better utilization.</p>
            </div>
            <div className='my-5'>
                <p className='text-3xl my-2'>Difference between SQL and NoSQL databases</p>
                <p className='text-xl'><span className='font-bold'>Ans: </span>SQL databases scale vertically, but NoSQL databases scale horizontally. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based. SQL databases are better suited for multi-row transactions, but NoSQL databases are better suited for unstructured data such as documents or JSON.</p>
            </div>
            <div className='my-5'>
                <p className='text-3xl my-2'>What is the purpose of JWT and how does it work</p>
                <p className='text-xl'><span className='font-bold'>Ans: </span>JWT, or JSON Web Token, is an open standard for exchanging security information between two parties - a client and a server. Each JWT comprises encoded JSON objects containing a set of claims. JWTs are signed with a cryptographic technique to ensure that the claims cannot change after issuing the token.</p>
            </div>
        </div>
    );
};

export default Blogs;