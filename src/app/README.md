That useEffect bug was niggling at me.

When using useEffect with an empty dependency array, we know that it should be called on load. But the one in our layout was only being called sometimes on load, sometimes not (I put a console.log in to see). This meant that the call to the API to get controls was only sometimes happening. Obviously, this is race conditions somewhere, but what was causing it? The same type of useEffect with empty dependency was also being used on our pages to call for results and details, but working perfectly.

So I decided to try to recreate the bug on another app. Hence this repo.

Except I haven't been able to recreate it.

I made sure all the package versions exactly match our app.
I wrote a server action with a 2 second delay and called it in a client component via a useEffect with an empty dependency array.
I added mui
I added a custom theme
I added zustand and put the results of the server action in the store then displayed it in the layout.

None of this is any problem at all - the useEffect always loads flawlessly.
