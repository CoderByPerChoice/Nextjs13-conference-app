import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '800', subsets: ['latin'], })

const Abount = () => {
    return (
        <div className={poppins.className}>
        <div class="bg-black text-white opacity-70 p-10 rounded-md">
        <div class="text-2xl">Conferencing hosting platform!</div>
          <p class="my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing 
          elit. Aenean commodo ligula eget dolor. Aenean massa 
           strong. Cum sociis natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque 
          eu, pretium quis, sem. Nulla consequat massa quis 
          enim. Donec pede justo, fringilla vel, aliquet nec, 
          vulputate eget, arcu. In enim justo, rhoncus ut, 
          imperdiet a, venenatis vitae, justo. Nullam dictum 
          felis eu pede <a class="external ext" href="#">link</a> 
          mollis pretium. Integer tincidunt. Cras dapibus. 
          Vivamus elementum semper nisi. Aenean vulputate 
          eleifend tellus. Aenean leo ligula, porttitor eu, 
          consequat vitae, eleifend ac, enim. Aliquam lorem ante, 
          dapibus in, viverra quis, feugiat a, tellus. Phasellus 
          viverra nulla ut metus varius laoreet. Quisque rutrum. 
          Aenean imperdiet. Etiam ultricies nisi vel augue. 
          Curabitur ullamcorper ultricies nisi.</p>
          <h1>Lorem ipsum dolor sit amet consectetuer adipiscing 
          elit</h1>
        </div>
      </div>
    );
}

export default Abount;