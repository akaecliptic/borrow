export default interface IRecord {
    book_id: string;
    user_id: string;
    borrowed: string; // DateTimes
    returned: string; // DateTimes
    status: 'ordered' | 'borrowed' | 'requested' | 'returned';
};
