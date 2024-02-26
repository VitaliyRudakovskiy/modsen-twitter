import Textarea from '@/components/Textarea';
import { IModal } from '@/types/form';
import Portal from '@/UI/Portal';

const TweetModal = ({ closeModal }: IModal) => {
  return (
    <Portal closeModal={closeModal}>
      <Textarea />
    </Portal>
  );
};

export default TweetModal;
