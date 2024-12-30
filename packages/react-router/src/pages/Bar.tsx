import { FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const Loading: FC = () => {
    return <p>Loading...</p>
}

const PageBar: FC = () => {
    const data = useLoaderData();
    console.log('loaded data', data);

    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Await resolve={data}>
                    {JSON.stringify(data)}
                </Await>
            </Suspense>
        </div>
    );
}

export default PageBar;