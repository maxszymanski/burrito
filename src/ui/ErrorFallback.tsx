import { FallbackProps } from 'react-error-boundary'
import Button from './Button'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-20">
            <div className="bg-white border-gray-100 rounded-md p-20 flex text-center flex-col items-center">
                <h2 className="pb-7 text-4xl lg:text-5xl leading-snug">
                    Coś poszło nie tak 😥
                </h2>
                <p className=" mb-14 text-gray-500 text-2xl lg:text-3xl">
                    {error.message}
                </p>
                <Button onClick={resetErrorBoundary} type=" mt-2 px-6 ">
                    Spróbuj ponownie
                </Button>
            </div>
        </main>
    )
}

export default ErrorFallback
