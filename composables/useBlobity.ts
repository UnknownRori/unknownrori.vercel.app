import useBlobity from 'blobity';

export default function () {
    onMounted(() => {
        new useBlobity({
            invert: true,
            dotColor: '#3CCF91',
            font: 'Fira Code',
            fontSize: 13,
        });
    });
}
