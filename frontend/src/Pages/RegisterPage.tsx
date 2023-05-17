import React from 'react';

export default function RegisterPage() {


    return (
        <div>
            <form>
                <div>
                    Name:
                    <input placeholder="Name"  type="text"/>
                </div>
                <div>
                    Password:
                    <input placeholder={"Password"} type="text"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
}