import { AddIcon } from '@chakra-ui/icons';
import {
    Flex,
    HStack,
    Input,
    VStack,
    Text,
    Select,
    InputGroup,
    InputRightElement,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Tag,
    TagLabel,
    TagCloseButton,
    useColorModeValue,
    Button,
    Wrap,
    WrapItem,
    Box,
    Image,
} from '@chakra-ui/react';
import React, { MouseEventHandler, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import BrowserContext from '../../context/browser-context';
import coffeeCompass from '../../static/compass.jpg';

const NewBrew = () => {
    const borderColor = useColorModeValue('lightFont', 'darkFont');

    const [coffee, setCoffee] = useState<number>();
    const [water, setWater] = useState<number>();
    const [grindSize, setGrindSize] = useState<number>(7);
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });
    const [tastingNotes, setTastingNotes] = useState<string[]>([]);
    const [tastingNote, setTastingNote] = useState('');

    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const isBrowser = useContext(BrowserContext);

    useEffect(() => {
        setWidth(ref.current?.clientWidth || 0);
    }, [ref.current?.clientWidth]);

    return (
        <Flex justify="center" p={5} w="100%">
            <VStack spacing={5} ref={ref} maxW="100%">
                <VStack spacing={1} w="100%">
                    <Text alignSelf="flex-start">Bean</Text>
                    <Input borderColor={borderColor} _hover={{ borderColor }} />
                </VStack>
                <VStack spacing={1}>
                    <Flex justify="space-between" w="100%">
                        <Text>Coffee Used</Text>
                        <Text>Water Used</Text>
                    </Flex>
                    <HStack>
                        <InputGroup borderColor={borderColor}>
                            <Input
                                pr="5rem"
                                type="number"
                                onChange={({ target }) => setCoffee(+target.value)}
                                _hover={{ borderColor }}
                            />
                            <InputRightElement bg="transparent" w="4.5rem" zIndex={1}>
                                <Select defaultValue="g" zIndex={1} border="0" _hover={{ cursor: 'pointer' }}>
                                    <option value="grams">g</option>
                                    <option value="ounces">oz</option>
                                </Select>
                            </InputRightElement>
                        </InputGroup>
                        <InputGroup borderColor={borderColor}>
                            <Input
                                pr="5rem"
                                type="number"
                                onChange={({ target }) => setWater(+target.value)}
                                _hover={{ borderColor }}
                            />
                            <InputRightElement bg="transparent" w="4.5rem" zIndex={1}>
                                <Select defaultValue="g" zIndex={1} border="0" _hover={{ cursor: 'pointer' }}>
                                    <option value="grams">g</option>
                                    <option value="ounces">ml</option>
                                    <option value="ounces">oz</option>
                                </Select>
                            </InputRightElement>
                        </InputGroup>
                    </HStack>

                    {!!coffee && !!water && <Text alignSelf="flex-end"> = {coffee * (1000 / water)} g/L</Text>}
                </VStack>
                <VStack spacing={1} w="100%">
                    <Text alignSelf="flex-start">Grind Size: {GRIND_SIZES[grindSize - 1]}</Text>
                    <HStack w="100%" spacing={3}>
                        <Text>Fine</Text>
                        <Slider
                            aria-label="slider-ex-1"
                            value={grindSize}
                            min={1}
                            max={13}
                            step={1}
                            onChange={(val) => setGrindSize(val)}
                        >
                            <SliderTrack>
                                <SliderFilledTrack bg="accent" />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        <Text>Coarse</Text>
                    </HStack>
                </VStack>
                <HStack alignSelf="flex-start">
                    <Input placeholder="Grinder Used?" borderColor={borderColor} _hover={{ borderColor }} />
                    <Input placeholder="Grinder Setting?" borderColor={borderColor} _hover={{ borderColor }} />
                </HStack>
                <VStack spacing={1} alignSelf="flex-start">
                    <Text alignSelf="flex-start">Brew Duration (M:S)</Text>
                    <HStack
                        border="1px solid"
                        borderColor={borderColor}
                        borderRadius="md"
                        transitionDuration="normal"
                        transitionProperty="common"
                        w="10rem"
                    >
                        <NumberInput min={0} max={59} value={time.minutes} borderColor={borderColor}>
                            <NumberInputField
                                textAlign="end"
                                border="0"
                                paddingInlineEnd={2}
                                onChange={({ target }) => setTime({ ...time, minutes: +target.value })}
                            />
                        </NumberInput>
                        <Text>:</Text>
                        <NumberInput min={0} value={time.seconds}>
                            <NumberInputField
                                textAlign="start"
                                border="0"
                                paddingInlineStart={2}
                                onChange={({ target }) => setTime({ ...time, seconds: +target.value })}
                                onBlur={() => {
                                    const newTime = {
                                        minutes: time.minutes + Math.floor(time.seconds / 60),
                                        seconds: time.seconds % 60,
                                    };
                                    setTime({ ...newTime });
                                }}
                            />
                        </NumberInput>
                    </HStack>
                </VStack>
                <VStack w="100%">
                    <Text alignSelf="flex-start">Notes</Text>
                    <Wrap maxW={width} alignSelf="flex-start">
                        {tastingNotes.map((tn, idx) => (
                            <WrapItem maxW={width}>
                                <CustomTag
                                    label={tn}
                                    onRemove={(tag) => setTastingNotes(tastingNotes.filter((tn) => tn !== tag))}
                                    key={idx}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                    <InputGroup>
                        <Input
                            pr="4.5rem"
                            borderColor={borderColor}
                            _hover={{ borderColor }}
                            placeholder="Tasting Note"
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    tastingNote &&
                                        !tastingNotes
                                            .map((tn) => tn.toLowerCase())
                                            .includes(tastingNote.toLowerCase()) &&
                                        setTastingNotes([...tastingNotes, tastingNote]);
                                    setTastingNote('');
                                }
                            }}
                            onChange={({ target }) => setTastingNote(target.value)}
                            value={tastingNote}
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                bg="brand.100"
                                aria-label="Add Tasting Note"
                                color="black"
                                _hover={{ bg: isBrowser ? 'accent' : 'brand.100' }}
                                _active={{
                                    transform: isBrowser ? '' : 'scale(105%)',
                                    bg: 'brand.100',
                                }}
                                onClick={() => {
                                    if (
                                        tastingNote &&
                                        !tastingNotes.map((tn) => tn.toLowerCase()).includes(tastingNote.toLowerCase())
                                    ) {
                                        setTastingNotes([...tastingNotes, tastingNote]);
                                    }
                                    setTastingNote('');
                                }}
                            >
                                Add
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </VStack>
                <Compass size={`${width}px`} />
            </VStack>
        </Flex>
    );
};

const CustomTag = ({ onRemove, label }: { onRemove: (tag: ReactNode) => void; label: string }) => {
    return (
        <HStack spacing={4} maxW="100%">
            <Tag borderRadius="full" variant="solid" bg="brand.100">
                <TagLabel color="black">
                    <Text isTruncated>{label}</Text>
                </TagLabel>
                <TagCloseButton onClick={() => onRemove(label)} color="black" />
            </Tag>
        </HStack>
    );
};

const Compass = ({ size }: { size: string }) => {
    const canvas = useRef<HTMLCanvasElement>(null);

    const clickHandler: MouseEventHandler<HTMLCanvasElement> = ({ clientX, clientY }) => {
        if (!canvas.current) return;
        const { left, top } = canvas.current?.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        drawX(x, y);
    };

    const drawX = (x: number, y: number) => {
        const ctx = canvas.current?.getContext('2d');
        if (!ctx || !canvas.current) return;
        const { width, height } = canvas.current;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.moveTo(x - width * 0.03, y - width * 0.03);
        ctx.lineTo(x + width * 0.03, y + width * 0.03);
        ctx.moveTo(x + width * 0.03, y - width * 0.03);
        ctx.lineTo(x - width * 0.03, y + width * 0.03);
        ctx.strokeStyle = '#a0583c';
        ctx.lineWidth = 3;
        ctx.stroke();
    };

    useEffect(() => {
        if (!canvas.current) return;
        canvas.current.width = canvas.current.offsetWidth;
        canvas.current.height = canvas.current.offsetHeight;
    }, [canvas.current, size]);

    return (
        <div style={{ width: size, height: size }}>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src={coffeeCompass}
                />
                <canvas
                    ref={canvas}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        backgroundColor: 'rgba(255,0,0,.1)',
                    }}
                    onClick={clickHandler}
                />
            </div>
        </div>
    );
};

const GRIND_SIZES = [
    'Extra-Fine',
    'Extra-Fine to Fine',
    'Fine',
    'Fine to Medium-Fine',
    'Medium-Fine',
    'Medium-Fine to Medium',
    'Medium',
    'Medium to Medium-Coarse',
    'Medium-Coarse',
    'Medium-Coarse to Coarse',
    'Coarse',
    'Coarse to Extra-Coarse',
    'Extra-Coarse',
];

export default NewBrew;
