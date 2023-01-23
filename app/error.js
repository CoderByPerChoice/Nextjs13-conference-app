'use client';

export default function Error({
    error,
    reset,
}) {
    return (
        <html>
            <head></head>
            <body>
                <h2>Something went wrong!</h2>
                <h4>Errors: {error.message}</h4>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}