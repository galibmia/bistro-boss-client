import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';

const ChefRecommends = ({ category }) => {
    const { menu } = useMenu(category);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart(); // Updated to destructure the object

    const handleAddToCart = (item) => {
        if (!user) {
            Swal.fire({
                title: "Are you sure to Add it?",
                text: "You need to login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        } else {
            const { _id, name, price, image } = item;
            const cartItem = { menuItemId: _id, name, price, image, email: user.email };
            
            fetch('https://bistro-boss-server-one-umber.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // Refetch to update cart
                        Swal.fire({
                            title: "Item Added Successfully",
                            text: `${item.name} added to your cart`,
                            icon: "success"
                        });
                    }
                })
                .catch(err => console.error(err.message));
        }
    };

    return (
        <section>
            <SectionTitle
                heading={'CHEF RECOMMENDS'}
                subHeading={'Should Try'}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pl-2'>
                {menu.map(item => (
                    <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={item?.image}
                                alt={item?.name}
                            />
                        </figure>
                        <p className='absolute right-0 mr-4 mt-5 bg-black bg-opacity-70 text-white py-3 px-4 rounded-lg'>${item?.price}</p>
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold my-2 text-center">{item?.name}</h2>
                            <p className='text-center my-2'>{item?.recipe}</p>
                            <div className="card-actions justify-center">
                                <button onClick={() => handleAddToCart(item)} className="bg-[#E8E8E8] border-b-2 border-b-[#BB8506] px-8 py-3 rounded-lg hover:bg-[#1F2937] text-[#BB8506] uppercase mt-2">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChefRecommends;
