import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function AdminLayout(){
    return(
        <html lang="en">
            <body>
                <main>
                {children}
                </main>
            </body>
        </html>
    );
}