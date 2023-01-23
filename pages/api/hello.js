// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    // {
    //   "speakers": [{ 
    //     name: 'John Doe'
    //   }, 
    //   {
    //     name: 'Rahul'
    //   }
    //   ]
    // }
    {
      "sessions": [
        {
          "id": 84473,
          "title": "Secure Programming for the Enterprise"
        },
        {
          "id": 84375,
          "title": "Automation: A Deep Dive into Jenkins",
        }
      ]
    }
  )
}
